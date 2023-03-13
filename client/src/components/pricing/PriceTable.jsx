import React from 'react';
// Icons
import checkIcon from '../../img/checkIcon.svg';
import crossIcon from '../../img/closeCross.svg';
import InfinityIcon from '../../img/infinityIcon.svg';
// Utils
import { pricingTableData } from '../../utils/utils';

function PriceTable() {
  return (
    <section className='bg-main-colour m-2'>
      <table className='border-2 border-black border-solid w-full text-xs lg:text-base leading-3 lg:leading-4'>
        <thead>
          <tr className='grid grid-cols-4 p-2'>
            <th className='border-2 border-black border-solid p-2'>Element</th>
            <th className='border-2 border-black border-solid p-2'>
              Basic Site
            </th>
            <th className='border-2 border-black border-solid p-2'>
              Basic Shop
            </th>
            <th className='border-2 border-black border-solid p-2'>
              Fullstack Project
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingTableData.map((item, index) => {
            return (
              <tr key={index} className='grid grid-cols-4 px-2'>
                <td className='border-2 border-black border-solid p-2'>
                  {item.title}
                </td>
                <td className='border-2 border-black border-solid p-2 flex justify-center'>
                  {item.basicSite.available ? (
                    <img src={checkIcon} alt='check' className='w-6' />
                  ) : (
                    <img src={crossIcon} alt='not included' className='w-6' />
                  )}
                </td>
                <td className='border-2 border-black border-solid p-2 flex justify-center'>
                  {item.basicShop.available ? (
                    <img src={checkIcon} alt='check' className='w-6' />
                  ) : (
                    <img src={crossIcon} alt='not included' className='w-6' />
                  )}
                </td>
                <td className='border-2 border-black border-solid p-2 flex justify-center'>
                  {item.fullstack.available ? (
                    <img src={checkIcon} alt='check' className='w-6' />
                  ) : (
                    <img src={crossIcon} alt='not included' className='w-6' />
                  )}
                  {item.fullstack.amount === 'infinite' && (
                    <img src={InfinityIcon} alt='check' className='w-5' />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
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
        </tfoot>
      </table>
    </section>
  );
}

export default PriceTable;
