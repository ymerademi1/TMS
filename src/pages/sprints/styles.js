import styled from 'styled-components';
import CustomMedia from '../../components/common/CustomMedia';

export const SprintsWrapper = styled.div`
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

  .sprints-row{
    .sprint{
      margin: 0 0 15px 0;
      width: 310px;
      min-height: 220px;
      max-height: 600px;
      border: 1px solid #e8e8e8;
      border-radius: 10px;
      box-shadow: 0 4px 8px 5px rgba(0,0,0,0.07);
      -webkit-box-shadow: 0 4px 8px 5px rgba(0,0,0,0.07);
      -moz-box-shadow: 0 4px 8px 5px rgba(0,0,0,0.07);

      ${CustomMedia.lessThan("md")`
        width: 100%;
      `}

      .title{
        background-color: white;
        border-bottom: 1px solid #e8e8e8;
        border-radius: 10px 10px 0 0;
        height: 85px;
        padding: 15px;
        overflow-y: auto;
        .title-text{
          span{
            font-size: 18px;
            font-weight: 600;
          }
        }
        .title-date-wrapper{
          display: flex;
          align-items: center;
          .title-date{
            display: flex;
            flex: 2;
            span{
              font-size: 13px;
              font-weight: 400;
              opacity: .8;
            }
          }
          .title-edit{
            display: flex;
            flex: 1;
            justify-content: flex-end;
            span{
              border: 1px solid rgba(0, 0, 0, .8);
              border-radius: 5px;
              padding: 2px 5px;
              font-size: 13px;
              font-weight: 400;
              opacity: .8;
              cursor: pointer;
              :hover{
                border-color: #12caf0;
                color: #12caf0;
              }
            }
          }
        }
      }
      .description{
        margin: 15px;
        overflow-y: auto;
        max-height: 483px;
        opacity: .8;

        .add-ticket-wrapper{
          position: sticky;
          top: 0;
          z-index: 5;
          height: 52px;
          background: #f8f8f8;

          .add-ticket-button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40px;
            border: 2px solid #e8e8e8;
            border-radius: 10px;
            background: white;
            margin-bottom: 15px;
            cursor: pointer;
            span{
              font-size: 30px;
              opacity: .5;
            }
            :hover{
              border-color: #12caf0;
              color: #12caf0;
              span{
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  .sprint-ticket{
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #e8e8e8;
    margin-bottom: 10px;
    cursor: pointer;
    :hover{
        border: 2px solid #12caf0;
    }

    .ticket-title{
      span{
        font-size: 16px;
        font-weight: 600;
      }
    }
    .ticket-description{
      span{
        font-size: 14px;
        font-weight: 400;
        opacity: .8;
      }
    }
  }
`;