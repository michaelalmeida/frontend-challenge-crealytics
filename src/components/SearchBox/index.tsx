import { Input, Container, ContainerWrapper } from "./SearchBox.styled";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps): JSX.Element => {
  return (
    <ContainerWrapper>
      <Container>
        <Input value={value} onChange={onChange} />
      </Container>
    </ContainerWrapper>
  );
};

export default SearchBox;
