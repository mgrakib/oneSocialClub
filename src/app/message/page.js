import { BsPlus } from "react-icons/bs";


const page = () => {
    return (
		<div>
			<div className='flex items-center justify-between'>
				<p className='text-2xl text-[#1B2445] font-semibold'>Message</p>

				<div>
					<button className='bg-[#0A208B] text-white hover:bg-[#3F1566] py-2 px-6 rounded-md duration-700 flex items-center gap-2'>
						<BsPlus /> New Chat
					</button>
				</div>
			</div>
		</div>
	);
};

export default page;