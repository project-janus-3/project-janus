/* eslint-disable import/extensions */
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { CompanyProfile } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditCompanyProfile from '@/components/EditCompanyProfile';

export default async function EditCompanyProfilePage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );

  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  // console.log(id);
  const companyProfile: CompanyProfile | null = await prisma.companyProfile.findUnique({
    where: { id },
  });
  // console.log(stuff);
  if (!companyProfile) {
    return notFound();
  }

  return (
    <main>
      <EditCompanyProfile companyProfile={companyProfile} />
    </main>
  );
}
