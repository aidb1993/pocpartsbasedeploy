export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchAllData(partNumber, sessionId) {
  const publicSearchUrl = `https://dev-apiservices.partsbase.com/pb-publicsearch?partnumber=${partNumber}&frompublicsearch=true`;
  const top10Url = `https://dev-apiservices.partsbase.com/dev-pbd-searchTop10?partnumber=${partNumber}&sessionid=${sessionId}`;
  const relatedSearchUrl = `https://dev-apiservices.partsbase.com/dev-pbd-relatedsearch?partnumber=${partNumber}&employeeid=0&sessionid=${sessionId}&industryName=&companyId=`;
  const testimonialsUrl = `https://dev-apiservices.partsbase.com/dev-pbd-Testimonials?size=2&sessionid=${sessionId}`;

  const [publicSearchData, top10Data, relatedSearchData, testimonialsData] =
    await Promise.all([
      fetchData(publicSearchUrl),
      fetchData(top10Url),
      fetchData(relatedSearchUrl),
      fetchData(testimonialsUrl),
    ]);

  return { publicSearchData, top10Data, relatedSearchData, testimonialsData };
}
