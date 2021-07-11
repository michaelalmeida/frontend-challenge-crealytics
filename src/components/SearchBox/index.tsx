import { Input, Container, ContainerWrapper } from "./SearchBox.styled";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBox = ({
  value,
  onChange,
  placeholder,
}: SearchBoxProps): JSX.Element => {
  return (
    <ContainerWrapper>
      <Container>
        <Input value={value} onChange={onChange} placeholder={placeholder} />
      </Container>
    </ContainerWrapper>
  );
};

export default SearchBox;
