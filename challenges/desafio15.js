// use("commerce");
db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);
// https://www.mongodb.com/docs/manual/reference/operator/query/in/
db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $set: { avaliacao: 5 } },
);

db.produtos.updateMany(
  { tags: { $in: ["ave"] } },
  { $set: { avaliacao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });