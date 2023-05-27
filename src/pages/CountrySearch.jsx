import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = searchParams.get('region');

    if (!region) return;

    fetchByRegion(region).then(data => setCountries(data));
  }, [searchParams]);

  const onSubmit = region => {
    setSearchparams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
