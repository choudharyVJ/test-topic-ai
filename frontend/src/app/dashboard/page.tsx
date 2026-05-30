import {

  auth,

} from '@clerk/nextjs/server';

import {

  redirect,

} from 'next/navigation';

import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

import DashboardHeader from '@/components/dashboard/DashboardHeader';

import DashboardStats from '@/components/dashboard/DashboardStats';


export default async function DashboardPage() {

  const {

    userId,

  } = await auth();

  if (!userId) {

    redirect('/');
  }

  return (

    <main
      className="
        min-h-screen

        flex
      "
    >

      {/* Sidebar */}

      <DashboardSidebar />

      {/* Main Content */}

      <section
        className="
          flex-1

          px-6
          md:px-10

          py-8
        "
      >

        <DashboardHeader />

        <DashboardStats />

      </section>

    </main>
  );
}