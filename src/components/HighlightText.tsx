import { Fragment } from "react";
import styled from "styled-components";
import { getRegex } from "../utils/utils";

interface HighlightTextProps {
  title: string;
  term: string;
}

const TITLE_IDENTIFIER = "!@#";
const TITLE_SEPERATOR = `,${TITLE_IDENTIFIER},`;

function HighlightText({ title, term }: HighlightTextProps) {
  const getOriginalTerm = (term: string) => title.match(getRegex(term)) ?? "";

  const injectIdentifier = (term: string) =>
    title.replaceAll(term, TITLE_SEPERATOR);

  const splitTitle = (title: string) => title.split(",");

  const removeEmptyValue = (splitedTitle: ReturnType<typeof splitTitle>) => {
    return !!!splitedTitle[0] ? splitedTitle.slice(1) : splitedTitle;
  };

  const [originalTerm] = getOriginalTerm(term);

  // const injectedTitle = injectIdentifier(originalTerm);
  // const split = splitTitle(injectedTitle);
  // const processedTitle = removeEmptyValue(split);

  const processedTitle = removeEmptyValue(
    splitTitle(injectIdentifier(originalTerm))
  );

  return (
    <Container>
      {processedTitle.map((word, idx) => (
        <Fragment key={idx}>
          {word === TITLE_IDENTIFIER ? (
            <HighlightSpan>{getOriginalTerm(term)[0]}</HighlightSpan>
          ) : (
            <span>{word}</span>
          )}
        </Fragment>
      ))}
    </Container>
  );
}
export default HighlightText;

const Container = styled.span``;
const HighlightSpan = styled.span`
  color: red;
`;
