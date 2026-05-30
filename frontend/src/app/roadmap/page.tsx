import {

  auth,

} from '@clerk/nextjs/server';

import {

  redirect,

} from 'next/navigation';

import Navbar from '@/components/layout/Navbar';

import RoadmapHero from '@/components/roadmap/RoadmapHero';

import RoadmapGenerator from '@/components/roadmap/RoadmapGenerator';


export default async function RoadmapPage() {

  const {

    userId,

  } = await auth();

  if (!userId) {

    redirect('/');
  }

  return (

    <main>

      <Navbar />

      <RoadmapHero />

      <RoadmapGenerator />

    </main>
  );
}