"use client";

import SingleCustomerPage from "@/components/customers/SingleCustomerPage";
import LayoutApp from "@/components/layout/LayoutApp";
import LayoutWrapperWorkspace from "@/components/layout/LayoutWrapperWorkspace";

export default function Customers({}) {
  return (
    <LayoutApp>
      <LayoutWrapperWorkspace>
        <SingleCustomerPage />
      </LayoutWrapperWorkspace>
    </LayoutApp>
  );
}