import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParams {
    listings?: string;
  }
  
const ListingsPage = async ({params} : {params: IParams}) => {

    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <EmptyState />
        );
      }

    return (
            <ListingClient listing = {listing} currentUser = {currentUser} reservations={reservations}/>
    );
}
 
export default ListingsPage;