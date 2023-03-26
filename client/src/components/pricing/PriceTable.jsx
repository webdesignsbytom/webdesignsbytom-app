import React from 'react';
// Icons
import { FiCheckCircle } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { IoMdInfinite } from 'react-icons/io';
// Utils
import { pricingTableData } from '../../utils/utils';

function PriceTable() {
  return (
    <section id='pricing' className='mb-12 mx-4 lg:mx-20'>
      <section className='text-center text-3xl my-4'>
        <h3 className='font-semibold'>Basic Options</h3>
        <h4>Of Thousands Available!</h4>
      </section>
      <table
        className='bg-slate-500 border-2 shadow-2xl border-black border-solid w-full text-xs lg:text-base leading-3 lg:leading-4'
      >
        <thead>
          <tr className='grid grid-cols-4'>
            <th className='border-2 flex items-center justify-center border-black border-solid p-2'>
              Component
            </th>
            <th className='border-2 flex items-center justify-center border-black border-solid p-2'>
              Basic Site
            </th>
            <th className='border-2 flex items-center justify-center border-black border-solid p-2'>
              Online Shop
            </th>
            <th className='border-2 flex items-center justify-center border-black border-solid p-2'>
              Fullstack Project
            </th>
          </tr>
        </thead>
        <tbody className=''>
          {pricingTableData.map((item, index) => {
            return (
              <tr
                key={index}
                className='grid grid-cols-4 odd:bg-white even:bg-slate-300'
              >
                <td className='border-2 flex items-center justify-left border-black border-solid px-2 py-1'>
                  {item.title}
                </td>
                <td className='border-2  border-black border-solid px-2 py-1 flex items-center justify-center font-semibold'>
                  {item.basicSite.available ? (
                    <FiCheckCircle size={20} />
                  ) : (
                    <RxCross2 size={20} />
                  )}
                </td>
                <td className='border-2 border-black border-solid px-2 py-1 flex items-center justify-center'>
                  {item.basicShop.available ? (
                    <FiCheckCircle size={20} />
                  ) : (
                    <RxCross2 size={20} />
                  )}
                </td>
                <td className='border-2 border-black border-solid px-2 py-1 flex items-center justify-center'>
                  {item.fullstack.available ? (
                    <FiCheckCircle size={20} />
                  ) : (
                    <RxCross2 size={20} />
                  )}
                  {item.fullstack.amount === 'infinite' && (
                    <IoMdInfinite size={20} />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          <tr className='grid grid-cols-4 p-2'>
            <td className='border-2 border-black border-solid p-2'>
              Starting From:
            </td>
            <td className='border-2 border-black border-solid p-2 flex justify-center'>
              £450
            </td>
            <td className='border-2 border-black border-solid p-2 flex justify-center'>
              £750
            </td>
            <td className='border-2 border-black border-solid p-2 flex justify-center'>
              £1450
            </td>
          </tr>
        </tfoot> */}
      </table>
    </section>
  );
}

export default PriceTable;
