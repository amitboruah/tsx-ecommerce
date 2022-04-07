import { Table } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../../context/CountContext";
import "./checkout.scss";

export default function Checkout() {
  const { product, price } = useContext(CountContext);

  const navigate = useNavigate();

  const columns: any = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (image: string) => <img src={image} alt="product" />,
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  let data = product.map((e: any) => {
    return {
      name: e.name,
      img: e.img,
      qty: e.qty,
      price: e.price,
    };
  });

  return (
    <>
      <div className="checkoutContainer">
        <Table
          className="table"
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
          summary={(index: any) => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell index={index}></Table.Summary.Cell>
                <Table.Summary.Cell index={index}></Table.Summary.Cell>

                <Table.Summary.Cell index={index}>
                  <h2>Total</h2>
                </Table.Summary.Cell>

                <Table.Summary.Cell index={index}>
                  <h2>{price}</h2>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <div className="proceedContainer">
          <button className="checkoutBtn" onClick={() => navigate("/address")}>
            proceed
          </button>
        </div>
      </div>
    </>
  );
}
