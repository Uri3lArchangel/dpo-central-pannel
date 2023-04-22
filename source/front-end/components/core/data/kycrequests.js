import { Button } from "antd";

export const dataSource = [
  {
    key: "1",
    date: "12/23/21",
    name: "james",
    address: "4 urilks,dsj",
    membershipPlan: "aac",
    phoneNumber: "+234",
    email: "aaa@gmail.com",
    status: "pending",
  },
  {
    key: "2",
    date: "12/23/21",
    name: "kyle",
    address: "6s wjwns",
    membershipPlan: "aaa",
    phoneNumber: "+23422",
    email: "assaa@gmail.com",
    status: "approved",
  },
  {
    key: "3",
    date: "12/23/21",
    name: "mart",
    address: "4 urilks,dsj",
    membershipPlan: "aac",
    phoneNumber: "+234",
    email: "aaa@gmail.com",
    walletAddress: 0x00aa,
    status: "rejected",
  },
];
export const columns = [
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
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    render: ({ status }) => {
      return (
        <>
          {status === "pending" ? (
            <Button>Approve</Button>
          ) : (
            <Button disabled>Approve</Button>
          )}
          <br />
          <br />
          {status === "pending" ? (
            <Button danger style={{ backgroundColor: "red", color: "white" }}>
              Reject
            </Button>
          ) : (
            <Button
              disabled
              danger
              style={{ backgroundColor: "red", color: "white" }}
            >
              Reject
            </Button>
          )}
        </>
      );
    },
  },
];
