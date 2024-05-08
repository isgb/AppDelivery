CREATE TABLE roles(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(90) NOT NULL UNIQUE,
    image VARCHAR(255) NULL,
    route VARCHAR(100) NOT NULL,
    created_at timestamp(0) not null,
    updated_at timestamp(0) not null
);

INSERT INTO roles(
	name,
    route,
    created_at,
    updated_at
)
VALUES(
	'RESTAURANTE',
    '/restaurant/orders/list',
    '2022-03-27',
    '2022-03-27'
);

INSERT INTO roles(
	name,
    route,
    created_at,
    updated_at
)
VALUES(
	'REPARTIDOR',
    '/delivery/orders/list',
    '2022-03-27',
    '2022-03-27'
);


INSERT INTO roles(
	name,
    route,
    created_at,
    updated_at
)
VALUES(
	'CLIENTE',
    '/client/products/list',
    '2022-03-27',
    '2022-03-27'
);

create table user_has_roles(
	id_user BIGINT NOT NULL,
    id_rol BIGINT NOT NULL,
    created_at timestamp(0) NOT NULL,
    updated_at timestamp(0) NOT NULL,
    foreign key(id_user) references users(id) ON update CASCADE ON DELETE cascade,
    foreign key(id_rol) references roles(id) ON update CASCADE ON DELETE cascade,
    primary key(id_user, id_rol)
)
