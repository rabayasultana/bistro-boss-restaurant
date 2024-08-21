import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const axiosSecure = useAxiosSecure
    ();
    // const { user} = useAuth();
    // const { refetch, data: cart = [] } = useQuery({
    const { data: cart = [] } = useQuery({
        // queryKey: ['cart', user?.email],
        queryKey: ['cart'],
        queryFn: async() => {
            // const res = await axiosSecure.get(`/carts?email=${user.email}`);
            const res = await axiosSecure.get('/carts');
            return res.data;
        }
    })

    return [cart]
    // return [cart, refetch]
};

export default useCart;