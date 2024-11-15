

export default function NavbarProfile() {
    return  (
        <div className="py-[0.625rem] px-[2rem] w-full bg-white flex justify-end rounded-md">
            <div className="flex gap-4">
                <div className="size-[50px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="/assets/icons/settings.png" alt="" />
                </div>
                <div className="size-[50px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="/assets/icons/notif.png" alt="" />
                </div>
                <div className="size-[50px] rounded-full bg-off-white flex justify-center items-center">
                    <img src="/assets/icons/avatar.png" alt="" className="rounded-full" />
                </div>
            </div>
        </div>
    )
}