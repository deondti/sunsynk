ARG BUILD_FROM
FROM ${BUILD_FROM}

RUN set -x \
    && apk add --no-cache --virtual .build-deps \
        build-base \
    && pip3 install --no-cache-dir --disable-pip-version-check \
        aiohttp \
        async_modbus==0.2.2 \
        attrs==24.3.0 \
        cattrs==24.1.2 \
        connio==0.2.0 \
        jmespath==1.0.1 \
        mqtt-entity==0.0.4 \
        prettytable==3.12.0 \
        pymodbus[serial]==3.8.3 \
        pysolarmanv5==3.0.6 \
        pyyaml==6.0.2 \
        umodbus==1.0.4 \
    && apk del .build-deps

# Install sunsynk from local source
COPY sunsynk sunsynk
RUN pip3 install ./sunsynk[pymodbus,umodbus,solarman] --no-cache-dir --disable-pip-version-check

COPY rootfs /

#! RUN chmod a+x /etc/services.d/sunsynk/run
#! RUN chmod a+x /etc/services.d/sunsynk/finish
