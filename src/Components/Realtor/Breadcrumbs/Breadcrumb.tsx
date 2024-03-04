import React from 'react';
import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="pb-6 flex sticky top-0 flex-col gap-3 sm:flex-row sm:items-center h-30 bg-white sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-orange-600">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
