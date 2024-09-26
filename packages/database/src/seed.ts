import { prisma } from './client';

const seedData: { pollTitle: string; pollOptions: string[] }[] = [
  {
    pollTitle: 'What is the best food?',
    pollOptions: ['Pizza', 'Burgers', 'Tacos', 'Sushi'],
  },
  {
    pollTitle: 'What is the best Java Script Framework/Library?',
    pollOptions: ['React', 'Vue', 'Angular', 'Svelte'],
  },
];

(async () => {
  console.log('Seeding database...');
  try {
    seedData.forEach(async (data, pollIndex) => {
      const { pollTitle, pollOptions } = data;
      await prisma.poll.upsert({
        where: {
          id: pollIndex + 1,
        },
        update: {
          title: pollTitle,
        },
        create: {
          title: pollTitle,
        },
      });
      await Promise.all(
        pollOptions.map(async (option, optionIndex) => {
          return prisma.option.upsert({
            where: {
              pollId_optionId: {
                pollId: pollIndex + 1,
                optionId: optionIndex + 1,
              },
            },
            update: {
              name: option,
              votes: 0,
            },
            create: {
              name: option,
              pollId: pollIndex + 1,
              optionId: optionIndex + 1,
            },
          });
        }),
      );
    });

    console.log('Database seeded successfully');
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
