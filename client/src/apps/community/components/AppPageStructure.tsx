import { appInfo, urlStart } from '@/apps/community/helpers/appInfo';
import PageHeadElement from '@/apps/shared/components/PageHeadElement';
import { getPage } from '@/apps/shared/helpers/meta';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function PageStructure({ children }: { children: ReactNode}) {
  let { pathname } = useRouter();
  console.log(pathname, urlStart)
  pathname === '/' || pathname === urlStart ? pathname = `${urlStart}/home` : pathname;
  let { thisPage, pageTitle } = getPage(pathname, urlStart, appInfo.name);
  return (
    <>
      <PageHeadElement
        pageTitle={pageTitle}
        faviconUrl=''
      />

      <header>
        <nav>
          <span>{appInfo.name} App [{thisPage}]</span>
        </nav>
      </header>
      { children }
    </>
  );
};