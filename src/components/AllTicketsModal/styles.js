import styled from 'styled-components';
import CustomMedia from '../../components/common/CustomMedia';

export const AllTicketsModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  .sprint-ticket{
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #e8e8e8;
    margin-bottom: 20px;
    margin-right: 20px;
    cursor: pointer;
    width: 255px;
    height: 150px;
    :hover{
        border: 2px solid #12caf0;
    }

    .ticket-title{
        overflow-y: auto;
        height: 40px;
        border-bottom: 1px solid #e8e8e8;
      span{
        font-size: 16px;
        font-weight: 600;
      }
    }
    .ticket-description{
        overflow-y: auto;
        height: 90px;
      span{
        font-size: 14px;
        font-weight: 400;
        opacity: .8;
      }
    }
  }
`;