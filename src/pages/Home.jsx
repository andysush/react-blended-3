import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getCountries().then(data => {
      setIsLoading(true);
      setCountries(data)
    }).finally(()=> setIsLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
