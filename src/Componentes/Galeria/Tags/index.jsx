import styled from 'styled-components';
import tags from './tags.json';

const TagsAlinhamento = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 4px 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <TagsAlinhamento>
      <TagTitulo>
        <p>Busque por tags:</p>
      </TagTitulo>

      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.titulo}</Tag>
      ))}
    </TagsAlinhamento>
  );
};

export default Tags;
