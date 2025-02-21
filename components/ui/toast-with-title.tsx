'use client'

import { cn } from "@/lib/utils";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosInformationCircle, IoMdCloseCircle } from "react-icons/io";


export const ToastWithTitle = ({
    title,
    description,
    type
}:{
    title?: string,
    description?: string,
    type?: 'success' | 'warning' | 'error'
}) => {

    return (
        <div className={cn('bg-red-400')}
        >
            <div className={cn(
                    'rounded-full p-1 bg-[#D9D9D9]/10',
                    type === 'success' ? 'text-[#00DF80]' :
                    type === 'warning' ? 'text-[#FFD426]' :
                    type === 'error' ? 'text-[#F04248]' : ''
                )}
            >
                {type === 'success' ? 
                    <FaCheckCircle className='text-2xl pl-[1px]'/>
                : type === 'warning' ?
                    <IoIosInformationCircle className='text-2xl pl-[1px]'/>
                : type === 'error' ? 
                    <IoMdCloseCircle className='text-2xl pl-[1px]'/>
                : <></>
                }
            </div>
            <div className="flex flex-col">
                <span className="text-white font-semibold text-lg">{title}</span>
                <p className="text-[#C8C5C5] text-sm">{description}</p>
            </div>
		</div>
    );
}