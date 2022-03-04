import styled from "styled-components";

export const Cta = styled.div`
  a, button {
    background: var(--orange);
    padding: 10px 17px;
    color: #fff;
    border-radius: 5px;
    outline: none;
    border: none;
    transition: all 0.5s;
    &:hover {
      background: #fff;
      color: var(--orange);
    }

    &.outline {
      background: transparent;
      padding: 10px 17px;
      color: var(--orange);
      border: 1px solid var(--orange);
      border-radius: 4px;
      transition: all 0.5s;

      &:hover {
        background: var(--orange);
        color: #fff;
      }
    }
  }
`;
// export const Cont = styled.div`
// /* p  */
// `;