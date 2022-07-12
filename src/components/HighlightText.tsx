import styled from "styled-components";

interface HighlightTextProps {
  title: string;
  term: string;
}

const TITLE_IDENTIFIER = "!@#";
const TITLE_SEPERATOR = `,${TITLE_IDENTIFIER},`;

function HighlightText({ title, term }: HighlightTextProps) {
  const injectIdentifier = () =>
    title.toLocaleLowerCase().replaceAll(term, TITLE_SEPERATOR);

  const splitTitle = (title: string) => title.split(",");

  const removeEmptyValue = (splitedTitle: ReturnType<typeof splitTitle>) => {
    return !!!splitedTitle[0] ? splitedTitle.slice(1) : splitedTitle;
  };

  const injectedTitle = injectIdentifier();
  const split = splitTitle(injectedTitle);
  const processedTitle = removeEmptyValue(split);

  return (
    <Container>
      {processedTitle.map((word, idx) =>
        word === TITLE_IDENTIFIER ? (
          <HighlightSpan>{term}</HighlightSpan>
        ) : (
          <span>{word}</span>
        )
      )}
    </Container>
  );
}
export default HighlightText;

const Container = styled.span``;
const HighlightSpan = styled.span`
  color: red;
`;
