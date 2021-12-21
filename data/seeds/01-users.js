exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
  await knex("roles").truncate();
  await knex("roles").insert([
    { role_name: "owner" },
    { role_name: "participant" },
  ]);
  await knex("users").insert([
    {
      username: "mark",
      password:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0IiwibmFtZSI6Im1hcmsiLCJpYXQiOjE1MTYyMzkwMjJ9.JDgc3ru_8PFp4CA2N_scPJuNusxDOpw-PvmkJ65VDhY", // password "1234",
      email: "escosuramarkse@gmail.com",
      role_id: 1,
    },
    {
      username: "martin",
      password:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0IiwibmFtZSI6Im1hcnRpbiIsImlhdCI6MTUxNjIzOTAyMn0.crXspwmvdzXlCopNcMv0QmegiuTD_Yin3T2BjBKVoS8", // password "1234"
      email: "martin@gmail.com",
      role_id: 2,
    },
  ]);
};
