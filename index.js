const { prisma } = require('./generated/prisma-client/index');

async function main() {
  prisma.deleteManyUsers();
  prisma.deleteManyMacGuffins();
  const user1 = await prisma.createUser({});
  const user2 = await prisma.createUser({});
  const macGuffin1 = await prisma.createMacGuffin({
    owners: { connect: { id: user1.id } }
  });
  const macGuffin2 = await prisma.createMacGuffin({
    owners: { connect: { id: user2.id } }
  });
  const queryMcguffins1 = await prisma.macGuffins({ where: {
    OR: {
      id: macGuffin2.id,
      owners_some: { id: user1.id }
    }
  }});
  console.log(queryMcguffins1);
  const queryMcguffins2 = await prisma.macGuffins({ where: {
    OR: {
      owners_some: { id: user1.id }
    }
  }});
  console.log(queryMcguffins2);
}

main().catch(e => console.error(e));