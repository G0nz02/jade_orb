import Image from "next/image";

export default function OrbLogo() {
    return (
        <div className="flex flex-row items-center leading-none text-white">
            <Image 
                src='/jadeOrb.png'
                alt="Jade Orb Icon"
                width={200}
                height={200}
            />
            <p>Jade Orb</p>
        </div>
    );
}