import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import EmptyState from "../Shared/EmptyState";
import { useQuery } from "@tanstack/react-query";
import SelectDataRow from "./SelectDataRow";

const SelectedItem = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["select", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/customer/select?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Stream Cart - Selected Items</title>
      </Helmet>
      {select && Array.isArray(select) && select.length > 0 ? (
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Payment
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {select &&
                      select.map((select) => (
                        <SelectDataRow
                          key={select?._id}
                          select={select}
                          refetch={refetch}
                          user={user}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState message="No Items data available." />
      )}
    </>
  );
};

export default SelectedItem;