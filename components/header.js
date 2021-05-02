import { BadgeCheckIcon,CollectionIcon ,HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import Headeritem from './headeritem.js';
import Image from 'next/image';
function header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
             <div className ="flex flex-grow justify-evenly max-w-2xl">
                <Headeritem title="HOME" Icon={HomeIcon} > </Headeritem>
                <Headeritem title="TRENDING" Icon={LightningBoltIcon} > </Headeritem>
                <Headeritem title="VERIFIED" Icon={BadgeCheckIcon} > </Headeritem>
                <Headeritem title="COLLECTIONS" Icon={CollectionIcon} > </Headeritem>
                <Headeritem title="SEARCH" Icon={SearchIcon} > </Headeritem>
                <Headeritem title="ACCOUNT" Icon={UserIcon} > </Headeritem>
            </div>
           <Image className="object-contain" src="https://links.papareact.com/ua6" width="100%" height="100%" ></Image>
        </header>
    )
}

export default header
