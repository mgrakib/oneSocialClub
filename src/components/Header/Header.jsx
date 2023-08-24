/** @format */

import { BsRocketFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
	return (
		<div>
			<div className='flex items-center justify-between'>
				{/* search  */}
				<div className='relative'>
					<div className='absolute top-1/2 -translate-y-1/2 left-2 text-[#666666]'>
						<FiSearch />
					</div>
					<input
						type='text'
						name=''
						id=''
						className='py-[6px] pl-8 pr-2 outline-none bg-gray-100 placeholder:text-[#666666] text-[14px]'
						placeholder='Search'
					/>
				</div>

				{/* notification  */}
				<div className='px-4 text-[12px] font-semibold'>
					<div className='flex items-center gap-5'>
						<button className='bg-[#FFD800] hover:bg-[#FFAE42] duration-700 py-[6px] px-3 rounded-md text-[#1B2445] flex items-center gap-2'>
							<span>
								<BsRocketFill />
							</span>
							Getting Started - 0%
						</button>

						<div className="p-1 rounded hover:bg-gray-100 cursor-pointer">
							<IoMdNotificationsOutline className='text-2xl text-[#6F6F70]' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
