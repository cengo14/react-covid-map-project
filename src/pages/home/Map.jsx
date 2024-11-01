import React from "react";
import Container from "../../component/container";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const geoUrl = "/features.json";
  const navigate = useNavigate();
  return (
    <Container designs="max-md:!p-0 mt-10 my-20">
      <h1 className="p-5 text-2xl font-semibold">Ülke seçin</h1>
      <div className="shadow-lg md:rounded-xl bg-blue-200">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    onClick={() => navigate(`/detail/${geo.id}`)}
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="gray"
                    style={{
                      default: {
                        fill: "white",
                      },
                      hover: {
                        fill: "#DB2777",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </Container>
  );
};

export default Map;
