import { Button, Popover } from "antd";
import axios from "axios";

// export const dataSource = [
//   {
//     key: "1",
//     date: "12/23/21",
//     name: "james",
//     address: "4 urilks,dsj",
//     membershipPlan: "aac",
//     phoneNumber: "+234",
//     email: "aaa@gmail.com",
//     status: "pending",
//   },
//   {
//     key: "2",
//     date: "12/23/21",
//     name: "kyle",
//     address: "6s wjwns",
//     membershipPlan: "aaa",
//     phoneNumber: "+23422",
//     email: "assaa@gmail.com",
//     status: "approved",
//   },
//   {
//     key: "3",
//     date: "12/23/21",
//     name: "mart",
//     address: "4 urilks,dsj",
//     membershipPlan: "aac",
//     phoneNumber: "+234",
//     email: "aaa@gmail.com",
//     walletAddress: 0x00aa,
//     status: "rejected",
//   },
// ];
const tooltipContent_board = (
  <>
    <i>Awaiting Board Decision / Rejection</i>
  </>
);
const tooltipContent_kyc = (
  <>
    <i>Awaiting KYC Approval / Rejection</i>
  </>
);
const boardApproval=async(id,option,api,isBatchReady)=>{
try{
  if(isBatchReady) return;
  api.loading(option === 'Approvals'?'Approving request':'Rejecting request',1000)
  let data={
    id,option
  }

await axios.post('/api/kyc/updateApprovalOrRejection',data)

api.destroy()
api.success(option === 'Approvals'?'Approved':'Rejected',5)
setTimeout(()=>{
  window.location.reload()
},5000)}catch(err){
  api.destroy()
  api.error(err.message,5)
}

}
export const columns = (group,api,isBatchReady) => {
  return [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Membership Plan",
      dataIndex: "membershipPlan",
      key: "membershipPlan",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "E-Mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Wallet Address",
      dataIndex: "wallet",
      key: "wallet",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: ({ status, ApprovedByBoard,key }) => {

        if (status === "pending") {
         
          if (!ApprovedByBoard && group === "Board") {
            return (
              <>
                <Button onClick={()=>{boardApproval(key,"Approvals",api,isBatchReady)}}>Approve</Button>
                <br />
                <br />
                <Button
                  danger
                  onClick={()=>{boardApproval(key,"Rejections",api,isBatchReady)}}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Reject
                </Button>
              </>
            );
          } else if (!ApprovedByBoard && group === "kyc") {
            return (
              <>
                <Popover
                  content={tooltipContent_board}
                  title={"Incomplete decision"}
                >
                  <Button disabled>Approve</Button>
                </Popover>

                <br />
                <br />
                <Popover
                  content={tooltipContent_board}
                  title={"Incomplete decision"}
                >
                  <Button
                    disabled
                    danger
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Reject
                  </Button>
                </Popover>
              </>
            );
          } else if (ApprovedByBoard && group === "Board") {
           
            return (
              <>
                <Button disabled>Approve</Button>

                <br />
                <br />
                <Popover
                  content={tooltipContent_kyc}
                  title={"Incomplete decision"}
                >
                  <Button
                    disabled
                    danger
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Reject
                  </Button>
                </Popover>
              </>
            );
          } else {
            
           
            return (
              <>
                <Button onClick={()=>{boardApproval(key,"Approvals",api,isBatchReady)}} >Approve</Button>
                <br />
                <br />
                <Button
                  danger
                  onClick={()=>{boardApproval(key,"Rejections",api,isBatchReady)}}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Reject
                </Button>
              </>
            );
          }
        }else if(status === 'approved'){
          if(isBatchReady){
            return( <p>Awaiting Batch upload onchain</p>)
           }
        }
    
      },
    },
  ];
};
