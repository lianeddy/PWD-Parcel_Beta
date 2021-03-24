
const express = require("express")
const router = express.Router()
const {db, query} = require("../database");
const { validatorRegister } = require("../middlewares");
const {
  checkToken,
  createJWTToken,
  hashPassword,
  transporter,
  transportPromise,
} = require("../helper");



router.get('/',(req, res) => {
  let sql = `select * from users`;
  console.log(sql)
  db.query(sql, (err, data) => {
    if(err) {
      return res.status(500).send(err);
    };
    return res.status(200).send(data)
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  let sql = `
    SELECT 
        id, 
        username, 
        email, 
        roleID, 
        verified 
        FROM users WHERE email = '${email}' AND password = '${hashPassword(
          password
        )}'`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (data.length === 0) {
      return res.status(404).send({
        message: "User Not Found",
        status: "Not Found",
      });
    } else {
      const responseData = { ...data[0] };
      const token = createJWTToken(responseData);
      responseData.token = token;
      // console.log(data[0])
      // const responseData = { ...data[0], token: createJWTToken(data[0])}
      return res.status(200).send(responseData);
    }
  });
});

router.post("/keep-login", checkToken, (req, res) => {
  let sql = `
    SELECT 
        id, 
        username, 
        email,  
        roleID, 
        verified 
    FROM users WHERE id = ${req.user.id}`;
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(data[0]);
  });
});

router.post("/change-email", (req, res) => {
  const { email } = req.body;
  const getEmail = `SELECT id FROM users WHERE email = '${email}'`;
  db.query(getEmail, (err, getEmailResult) => {
    if (err) return res.status(500).send(err);
    const userID = getEmailResult[0].id;
    const token = createJWTToken({ id: userID });

    const mailOptions = {
      from: "Admin <kepinmahen@gmail.com>",
      to: email,
      subject: "Tautan untuk ganti kata sandi dari situs web Parcel",
      html: `<a href="http://localhost:3000/change-password?token=${token}">Klik disini untuk mengganti password anda</a>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) res.status(500).send(err);

      return res.status(200).send("Ok");

      router.post("/register", validatorRegister, async (req, res) => {
        let { username, password, email,} = req.body;
        password = hashPassword(password);
        try {
          const insert = await query(
            `INSERT INTO users (username, email, password, roleID, verified) VALUES ('${username}', '${email}', '${password}', 2, 0)`
          );
          const mailOptions = {
            from: "Admin <dickymaulanaa@gmail.com>",
            to: email,
            subject: "Email Verification",
            html: `<h1>Welcome ${username} to Parcel</h1> <br> <a href="http://localhost:3000/verify?username=${username}&password=${password}">Click Here to Verify your Account</a>`,
          };
          await transportPromise(mailOptions);
          const select = await query(
            `SELECT id, username, email, roleID, verified FROM users WHERE id = ${insert.insertId}`
          );
          const responseData = { ...select[0] };
          responseData.token = createJWTToken(responseData);
          return res.status(200).send(responseData);
        } catch (err) {
          return res.status(500).send(err.message);
        }
      });
      
      // Email Verification
      router.post("/email-verification", (req, res) => {
        const { username, password } = req.body;
        const get = `SELECT id FROM users WHERE username = '${username}' AND password = '${password}'`;
        db.query(get, (err, data) => {
          if (err) res.status(500).send(err);
      
          const idUser = data[0].id;
          const edit = `UPDATE users SET verified = 1 WHERE id = ${idUser}`;
          db.query(edit, (err) => {
            if (err) return res.status(500).send(err);
      
            const login = `SELECT id, username, email, alamat, roleID, verified FROM users WHERE id = ${idUser}`;
            db.query(login, (err, result) => {
              if (err) return res.status(500).send(err);
      
              const responseData = { ...result[0] };
              const token = createJWTToken(responseData);
              responseData.token = token;
              return res.status(200).send(responseData);
            });
    });
  });
});

router.post("/change-pass", checkToken, (req, res) => {
  const { password } = req.body;
  const userID = req.user.id;

  const editPassword = `UPDATE users SET password = '${hashPassword(
    password
  )}' WHERE id = ${userID}`;
  db.query(editPassword, (err) => {
    if (err) return res.status(500).send(err);

    return res.status(200).send("Ok");
  });
});

module.exports = router;
