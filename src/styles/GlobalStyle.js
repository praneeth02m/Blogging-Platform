import styled from "styled-components";

export const Form = styled.form`
  @media (max-width: 500px) {
    width: 100%;
  }
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
export const Input = styled.input`
  height: 30px;
  padding: 5px 5px;
  outline: none;
`;
export const TextContent = styled.textarea`
  height: 100px;
  padding: 5px 5px;
  outline: none;
`;
export const AddButton = styled.button`
  align-self: flex-end;
  width: 100px;
  cursor: pointer;
`;
export const Error = styled.p`
  color: red;
  margin: 0px;
  padding: 0px;
`;
export const AllBlogsDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  min-height: 100vh;
`;
export const AllDiv = styled.div`
  width: 90%;
`;
export const BlogPostsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const BlogPost = styled.li`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
  }
  width: 24%;
  padding: 10px;
  background-color: green;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
`;
