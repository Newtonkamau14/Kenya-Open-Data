import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function Profile() {
  return (
    <>
    <PageTitle title="Profile"/>
    <div>
      <h1 className="font-medium text-4xl mx-6 mt-4 mb-6">Profile Settings</h1>

      <div className="flex mx-6 my-3 gap-4">
        <div className="border-1 bg-white h-[80vh] w-[60%] rounded-md shadow-md">
          <h2 className="font-medium text-xl p-6">Personal Information</h2>
          <h3 className="font-normal text-gray-600 px-6">
            Update your personal details and public profile
          </h3>

          <form className="mt-6 flex flex-col h-full">
            <div className="mb-4 py-3">
              <label className="mx-6 block mb-1" htmlFor="username">
                Username
              </label>
              <input
                className="w-11/12 border mx-6 p-2 rounded"
                type="text"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4 py-3">
              <label className="mx-6 block mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-11/12 border mx-6 p-2 rounded"
                type="email"
                placeholder="john@gmail.com"
              />
            </div>

            <div className="mb-4 py-3">
              <label className="mx-6 block mb-1" htmlFor="phonenumber">
                Phone Number
              </label>
              <input
                className="w-11/12 border mx-6 p-2 rounded"
                type="text"
                placeholder="0712345678"
              />
            </div>
            <button className="mx-6 text-white text-sm bg-black p-2 rounded max-w-fit mt-4">Save Changes</button>
          </form>
        </div>

        <div className="flex flex-col w-[40%] gap-4">
          <div className="border-1 bg-white rounded-md shadow-md">
            <h2 className="font-medium text-xl p-6">Account Preferences</h2>
          </div>

          <div className="border-1 bg-white rounded-md shadow-md">
            <h2 className="font-medium text-xl p-6">Security</h2>
            <h3 className="font-normal text-gray-600 px-6">
              Manage your account security settings
            </h3>

            <div className="flex flex-col justify-center items-center gap-4 mt-6 pb-6">
              <Link
                className="border border-gray-300 hover:bg-gray-200 rounded-md text-center py-2 w-11/12"
                to="#"
              >
                Change Password
              </Link>
              <button className="bg-red-500 text-white rounded-md py-2 w-11/12">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
