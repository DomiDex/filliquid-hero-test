import Section from '@/components/ui/Section';

export default function Home() {
  return (
    <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
      <Section
        className='relative'
        containerWidth='full'
        containerClassName='container mx-auto flex flex-col items-center justify-center'
      >
        <h1 className='text-4xl font-bold text-center'>
          Stake & Borrow Filecoin To Earn FIG&FIL
        </h1>
      </Section>
    </main>
  );
}
