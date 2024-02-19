import { Box, Container, Flex, Text, useMantineTheme } from "@mantine/core";
import moment from "moment/moment";
import React from "react";

export const PrintModal = React.forwardRef((props, ref) => {
  const theme = useMantineTheme();

  const rows = props.body?.map((e, i) => (
    <tr key={i + 1}>
      {e.map((h, index) => (
        <td key={index}>
          <div
            style={{ color: "black" }}
            dangerouslySetInnerHTML={{
              __html: h,
            }}
          />
        </td>
      ))}
    </tr>
  ));

  const foot_rows = props.foot?.map((e, i) => (
    <td key={i} style={{ color: "black", fontWeight: 500 }}>
      {e}
    </td>
  ));

  const foot_multiple_rows = props.foots?.map((e, i) => (
    <tr key={i + 1}>
      {e.map((h, index) => (
        <td key={index} style={{ color: "black", fontWeight: 500 }}>
          {h}
        </td>
      ))}
    </tr>
  ));

  return (
    <div ref={ref} style={{ width: "400px" }}>
      <Container fluid mt={10}>
        {props.title ? (
          <Flex align={"center"} justify={"center"} direction={"column"} gap={"lg"}>
            <Text color="black" fz={"lg"} fw={600}>
              {props.title}
            </Text>
          </Flex>
        ) : (
          <></>
        )}
        {props.children}
        <table
          width={"100%"}
          align="center"
          style={{ marginTop: "10px", border: "1px solid black" }}
        >
          <thead
            style={{
              background: "white",
            }}
          >
            <tr>
              {props.head?.map((e, i) => (
                <th key={i}>
                  <Text color="black" ta={"justify"} size={"md"}>
                    {e}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            {foot_multiple_rows}
            <tr>{foot_rows}</tr>
          </tfoot>
        </table>
      </Container>
    </div>
  );
});
