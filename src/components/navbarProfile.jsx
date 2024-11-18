
export default function NavbarProfile() {
  return (
        <div className="flex gap-4">
          <div className="xl:size-[3.125rem] size-[1.5rem] rounded-full bg-white flex justify-center items-center">
            <img src="/assets/icons/settings.png" alt="" />
          </div>
          <div className="xl:size-[3.125rem] size-[1.5rem] rounded-full bg-white flex justify-center items-center">
            <img src="/assets/icons/notif.png" alt="" />
          </div>
          <div className="xl:size-[3.125rem] size-[1.5rem] rounded-full bg-white flex justify-center items-center">
            <img
              src="/assets/icons/avatar.png"
              alt=""
              className="rounded-full"
            />
          </div>
        </div>
  );
}
