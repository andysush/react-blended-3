import { Section, Container, CountryInfo, Loader, GoBack } from 'components';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchCountry(countryId).then(data => {
      setIsLoading(true);
      setCountry(data);
    }).finally(()=>setIsLoading(false));
  }, [countryId]);
  if (!country) {
    return;
  }
  return (
    <Section>
      <Container>
        <GoBack path={location?.state?.from ?? '/'} />
        <CountryInfo {...country} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
