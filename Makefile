clean:
	rm -rf conf/data/

build:
	rm -rf dist 
	yarn build

run:
	grafana-server  -homepath=/usr/local/share/grafana -config=conf/custom.ini
