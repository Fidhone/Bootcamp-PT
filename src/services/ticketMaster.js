import useAxios from "../Hooks/useAxios";

export const getTicketmaster = async () => {
  const optionsRequest = {
    method: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&apikey=GnNkLNvMtjeluuCLh7C2TwvEsotBZTcx&size=200",
  };
  const response = await useAxios(optionsRequest);
  console.log(response);
  return response;
};
