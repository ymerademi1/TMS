import styled from 'styled-components';
import CustomMedia from '../../components/common/CustomMedia';

export const MainWrapper = styled.div`
  display: flex;

  .first-row{
    display: flex;
    flex: 1;
    align-items: center;
    .title-row{
      display: flex;
      margin: 10px 0;
      span{
        font-size: 22px;
        font-weight: 600;
      }
    }
    .button-row{
      display: flex;
      flex: 2;
      justify-content: flex-end;
      margin: 10px 0;
      button{
        color: white;
      }
    }
  }
  .tickets-row{
    .ticket{
      cursor: pointer;
      margin: 0 0 15px 0;
      width: 310px;
      height: 220px;
      border: 1px solid #e8e8e8;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 4px 8px 5px rgba(0,0,0,0.07);
      -webkit-box-shadow: 0 4px 8px 5px rgba(0,0,0,0.07);
      -moz-box-shadow: 0 4px 8px 5px rgba(0,0,0,0.07);

      :hover{
        box-shadow: 0 8px 16px 10px rgba(0,0,0,0.07);
        -webkit-box-shadow: 0 8px 16px 10px rgba(0,0,0,0.07);
        -moz-box-shadow: 0 8px 16px 10px rgba(0,0,0,0.07);
        border: 1px solid #12caf0;
      }

      ${CustomMedia.lessThan("md")`
        width: 100%;
      `}

      .title{
        border-bottom: 1px solid #e8e8e8;
        height: 60px;
        padding: 15px;
        overflow-y: auto;
        span{
          font-size: 18px;
          font-weight: 600;
        }
      }
      .description{
        margin: 15px;
        overflow-y: auto;
        height: 130px;
        opacity: .8;
      }
    }
  }
`;