import React from "react";
import { TbFidgetSpinner } from "react-icons/Tb";
import { categories } from "../Category/CategoryData";

const UpdateItemForm = ({
  handleSubmit,
  loading,
  handleImageUpdate,
  itemDatas,
  setItemDatas,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Item Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="name"
              value={itemDatas?.name}
              onChange={(event) =>
                setItemDatas({ ...itemDatas, name: event.target.value })
              }
              id="name"
              type="text"
              placeholder="Item Name"
              defaultValue={itemDatas?.stock}
              required
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Category
            </label>
            <select
              onChange={(event) =>
                setItemDatas({ ...itemDatas, category: event.target.value })
              }
              required
              defaultValue={itemDatas.category}
              className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
              name="category"
            >
              {categories.map((category) => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(event) => {
                      handleImageUpdate(event.target.files[0]);
                    }}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    Upload Image
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                value={itemDatas?.price}
                onChange={(event) =>
                  setItemDatas({ ...itemDatas, price: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="price"
                id="price"
                type="number"
                placeholder="Price"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="duration" className="block text-gray-600">
                Duration
              </label>
              <input
                value={itemDatas?.duration}
                onChange={(event) =>
                  setItemDatas({ ...itemDatas, duration: event.target.value })
                }
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="duration"
                id="duration"
                type="number"
                placeholder="Duration in Month"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {loading ? (
            <TbFidgetSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateItemForm;
