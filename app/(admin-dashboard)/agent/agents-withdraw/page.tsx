"use client";
import {
  ArrowDownTrayIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { SearchIcon } from "@/public/data/icons";
import { agentWithdraw } from "@/public/data/agentWithdraw";
import HeadlessList from "@/components/ListBox";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Agent Withdraw</h2>
        <Link href="/cab/add-new-cab" className="btn-primary">
          <ArrowDownTrayIcon className="w-5 h-5" /> Download List
        </Link>
      </div>

      {/* Recent bookings */}
      <section className="bg-[var(--bg-2)] px-3 lg:px-6 mb-4 lg:mb-6  relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 xxl:pb-0">
        <div className="p-3 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl bg-white relative z-[1]">
          <div className="flex flex-wrap gap-3 justify-between mb-7">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="h3">Withdraw List</h3>
            </div>
            <form className="flex flex-wrap items-center gap-3">
              <div className="border rounded-full flex items-center p-1 pr-2 xl:pr-4 bg-[var(--bg-1)]">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-full bg-transparent focus:outline-none p-2 xl:px-4"
                />
                <SearchIcon />
              </div>
              <div className="flex items-center gap-1">
                <span>Sort By :</span>
                <div className="border rounded-full pr-3">
                  <select className="p-3 min-w-[100px] rounded-full focus:outline-none">
                    <option value="1">Hotel</option>
                    <option value="2">Price</option>
                    <option value="3">Location</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                  <th className="py-3 lg:py-4 px-2">Email</th>
                  <th className="py-3 lg:py-4 px-2">Phone</th>
                  <th className="py-3 lg:py-4 px-2">Amount</th>
                  <th className="py-3 lg:py-4 px-2">Method</th>
                  <th className="py-3 lg:py-4 px-2">Withdraw Date</th>
                  <th className="py-3 lg:py-4 px-2">Status</th>
                  <th className="py-3 lg:py-4 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {agentWithdraw.map(
                  ({
                    id,
                    amount,
                    email,
                    method,
                    phone,
                    withdrawDate,
                    status,
                  }) => (
                    <tr
                      key={id}
                      className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                      <td className="py-3 lg:py-4 px-2">{email}</td>
                      <td className="py-3 lg:py-4 px-2">{phone}</td>
                      <td className="py-3 lg:py-4 px-2">{amount}</td>
                      <td className="py-3 lg:py-4 px-2">{method}</td>
                      <td className="py-3 lg:py-4 px-2">{withdrawDate}</td>
                      <td className={`py-3 lg:py-4 px-2`}>
                        <div className={`w-32`}>
                          <HeadlessList initialValue={status} />
                        </div>
                      </td>
                      <td className="py-3 lg:py-4 px-2 flex gap-2 items-center">
                        <button className="text-primary">
                          <PencilSquareIcon className="w-5 h-5" />
                        </button>
                        <button className="text-[var(--secondary-500)]">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                        <button>
                          <EllipsisVerticalIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
