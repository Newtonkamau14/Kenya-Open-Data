import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import axios from "axios";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

type ApiKeyData = {
  name: string;
  apiKey: string;
};

function ApiManagement() {
  const [isVisible, setIsVisible] = useState(false);
  const [apiKeyData, setApiKeyData] = useState<ApiKeyData>({} as ApiKeyData);
  const [apiKeyName, setApiKeyName] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000); // Message will disappear after 3 seconds
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axiosInstance.delete("/api-key/delete");

      if (response.status === 200) {
        showAlert("API Key Deleted");
        fetchKey();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false);
        const message = error.response?.data?.message || "An error occurred";
        setError(message);
      } else {
        setError("An error occurred while deleting the API key");
      }
    }
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setIsLoading(true);
      setError(null);

      const response = await axiosInstance.post("/api-key/add", {
        apiKeyName,
      });

      if (response.status === 201) {
        showAlert("API KEY added successfully");
        setApiKeyName("");
        fetchKey();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false);
        const message = error.response?.data?.message || "An error occurred";
        setError(message);
      } else {
        setError("An error occurred while adding the API key");
      }
    }
  };

  const fetchKey = async () => {
    try {
      setIsLoading(true); // Start loading when fetching
      const response = await axiosInstance.get("/api-key");

      if (response.status === 200) {
        setApiKeyData(response.data);
        setIsLoading(false); // Stop loading after fetching data
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false);
        const message = error.response?.data?.message || "An error occurred";
        setError(message);
      } else {
        setError("An error occurred while fetching the API key");
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(apiKeyData.apiKey)
      .then(() => {
        showAlert("API key copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  useEffect(() => {
    fetchKey();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageTitle title="Api Management" />
      <div className="m-4">
        {alertMessage && (
          <div
            className="bg-blue-50 border border-blue-300 text-blue-500 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{alertMessage}</span>
          </div>
        )}
        <h1 className="text-2xl font-bold mb-6">API Management</h1>

        <div className="bg-white border border-[#E4E4E7] rounded-md h-1/2">
          <h1 className="text-xl font-bold pt-6 pl-6 pb-3">API Keys</h1>
          <h2 className="pl-6 text-lg font-light mb-4">
            Manage your API keys for authentication
          </h2>

          <table className="table-auto w-full mt-8">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-4 text-left">Name</th>
                <th className="px-4 py-4 text-left">Key</th>
                <th className="px-4 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(apiKeyData).length > 0 ? ( // Check if data exists
                <tr>
                  <td className="px-4 py-6">{apiKeyData.name}</td>
                  <td className="px-4 py-6">
                    {isVisible
                      ? apiKeyData.apiKey
                      : "••••••••••••••••••••••••••••••••"}
                  </td>
                  <td className="px-4 py-2">
                    <button className="mr-1" onClick={handleVisibility}>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                      </svg>
                    </button>
                    <button className="mr-1" onClick={handleCopy}>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                      </svg>{" "}
                    </button>
                    <button className="mr-1" onClick={handleDelete}>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td className="px-4 py-6" colSpan={3}>
                    No API Keys available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <form className="my-20 mx-8" onSubmit={handleSubmit}>
            <input
              type="text"
              name="apiKeyName"
              className="border rounded-md px-4 py-2 mr-2"
              placeholder="New API Key Name"
              onChange={(e) => setApiKeyName(e.target.value)}
              value={apiKeyName}
            />
            <button className="bg-[#357de8] px-4 py-2 rounded-md text-white hover:bg-[#7298ee] md:mt-2 sm:mt-2">
              <svg
                className="w-5 h-5 inline-block mr-1"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              Create New Key
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ApiManagement;
