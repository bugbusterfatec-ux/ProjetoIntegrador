
CREATE DATABASE PI_BD;
GO
USE PI_BD;


-- TABELA ANIMAL
CREATE TABLE	Animal(
	idAnimal INT IDENTITY(1, 1) PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	especie VARCHAR(50) NOT NULL,
	raca VARCHAR(50) NOT NULL, -- Tera raça indefinida
	peso VARCHAR(20) NOT NULL, -- Ate 5kg, De 6 até 15 kg, Acima de 15kg
	idade VARCHAR(50) NOT NULL, -- Menor que 3 meses, 3 a 5 meses, 6 meses a 7 anos, Acima de 7 anos
	cor VARCHAR(50) NOT NULL,
	sexo VARCHAR(10) NOT NULL,
	porte VARCHAR(10) NOT NULL,
	microchip BIT NOT NULL
);

-- TABELA USUARIO
CREATE TABLE Usuario (
    idHumano INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    endereco VARCHAR(200),
    dataNasc DATE CHECK (dataNasc <= GETDATE())
);

-- USUARIO - ANIMAL
CREATE TABLE Usuario_Animal (
    idUsuario INT,
    idAnimal INT,
    PRIMARY KEY (idUsuario, idAnimal),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idHumano)
        ON DELETE CASCADE,
    FOREIGN KEY (idAnimal) REFERENCES Animal(idAnimal)
        ON DELETE CASCADE
);

-- USUARIO INTERNO
CREATE TABLE userInterno (
    idFuncionario INT IDENTITY(1,1) PRIMARY KEY,
    idUsuario INT UNIQUE,
    especialidade VARCHAR(100),
    setor VARCHAR(100),
    permissao VARCHAR(100) CHECK (permissao IN ('ADMIN', 'PADRAO')),
    certificacao VARCHAR(100),
    experienciaAnos INT CHECK (experienciaAnos >= 0),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idHumano)
        ON DELETE CASCADE
);

-- USUARIO EXTERNO
CREATE TABLE userExterno (
    codPessoa INT IDENTITY(1,1) PRIMARY KEY,
    idUsuario INT UNIQUE,
    tipoResidencia VARCHAR(100),
    possuiOutrosAnimais BIT,
    experienciaComAnimais VARCHAR(100)
        CHECK (experienciaComAnimais IN ('INICIANTE', 'INTERMEDIARIO', 'EXPERIENTE')),
    estadoCivil VARCHAR(50)
        CHECK (estadoCivil IN ('SOLTEIRO', 'CASADO', 'DIVORCIADO', 'VIUVO')),
    renda DECIMAL(10,2) CHECK (renda >= 0),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idHumano)
        ON DELETE CASCADE
);

-- ADESTRADOR
CREATE TABLE Adestrador (
    idAdestrador INT IDENTITY(1,1) PRIMARY KEY,
    idUsuario INT UNIQUE,
    comportamentoAlvo VARCHAR(100),
    resultadoFinal VARCHAR(200),
    observacoes VARCHAR(MAX),
    status VARCHAR(50)
        CHECK (status IN ('EM_ANDAMENTO', 'CONCLUIDO', 'CANCELADO')),
    dataInicio DATE,
    dataFim DATE,
    metodoUtilizado VARCHAR(100),
    nivelTreinamento VARCHAR(50)
        CHECK (nivelTreinamento IN ('INICIANTE', 'INTERMEDIARIO', 'AVANCADO')),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idHumano)
        ON DELETE CASCADE,
    CONSTRAINT chk_datas_adestrador
        CHECK (dataFim IS NULL OR dataFim >= dataInicio)
);

-- ADESTRADOR - ANIMAL
CREATE TABLE Adestrador_Animal (
    idAdestrador INT,
    idAnimal INT,
    PRIMARY KEY (idAdestrador, idAnimal),
    FOREIGN KEY (idAdestrador) REFERENCES Adestrador(idAdestrador)
        ON DELETE CASCADE,
    FOREIGN KEY (idAnimal) REFERENCES Animal(idAnimal)
        ON DELETE CASCADE
);

-- DOENCA
CREATE TABLE Doenca (
    idDoenca INT IDENTITY(1,1) PRIMARY KEY,
    nomeDoenca VARCHAR(100) NOT NULL UNIQUE,
    descricao VARCHAR(MAX),
    tratamentoPadrao VARCHAR(200),
    dataIdentificado DATE
        CHECK (dataIdentificado <= GETDATE())
);

-- VACINA
CREATE TABLE Vacina (
    idVacina INT IDENTITY(1,1) PRIMARY KEY,
    nomeVacina VARCHAR(100) NOT NULL UNIQUE,
    descricao VARCHAR(MAX),
    fabricante VARCHAR(100),
    doseRecomendada VARCHAR(50),
    dataVacina DATE
        CHECK (dataVacina <= GETDATE())
);

-- PRONTUARIO
CREATE TABLE Prontuario (
    idProntuario INT IDENTITY(1,1) PRIMARY KEY,
    idAnimal INT NOT NULL,
    dataDiagnostico DATE
        CHECK (dataDiagnostico <= GETDATE()),
    statusTratamento VARCHAR(100)
        CHECK (statusTratamento IN ('ATIVO', 'FINALIZADO', 'SUSPENSO')),
    observacoes VARCHAR(MAX),
    vacina VARCHAR(100),
    dataImplantacaoChip DATE,
    dataAplicacao DATE,
    profissionalResponsavel VARCHAR(100),
    lote VARCHAR(50),
    tratamentoAtual VARCHAR(200),
    profissionalAplicador VARCHAR(100),
    idDoenca INT,
    FOREIGN KEY (idAnimal) REFERENCES Animal(idAnimal)
        ON DELETE CASCADE,
    FOREIGN KEY (idDoenca) REFERENCES Doenca(idDoenca),
    CONSTRAINT chk_datas_prontuario
        CHECK (
            dataAplicacao IS NULL
            OR dataImplantacaoChip IS NULL
            OR dataAplicacao >= dataImplantacaoChip
        )
);

-- PRONTUARIO - VACINA
CREATE TABLE Prontuario_Vacina (
    idProntuario INT,
    idVacina INT,
    PRIMARY KEY (idProntuario, idVacina),
    FOREIGN KEY (idProntuario) REFERENCES Prontuario(idProntuario)
        ON DELETE CASCADE,
    FOREIGN KEY (idVacina) REFERENCES Vacina(idVacina)
);

-- PRONTUARIO - DOENÇA
CREATE TABLE Prontuario_Doenca (
    idProntuario INT,
    idDoenca INT,
    PRIMARY KEY (idProntuario, idDoenca),
    FOREIGN KEY (idProntuario) REFERENCES Prontuario(idProntuario)
        ON DELETE CASCADE,
    FOREIGN KEY (idDoenca) REFERENCES Doenca(idDoenca)
);

-- INSERIRNDO DADOS DE EXEMPLO

INSERT INTO Animal (nome, especie, raca, peso, idade, cor, sexo, porte, microchip) VALUES
('Zafir', 'Cachorro', 'Vira-lata', 'Ate 5kg', 'Menor que 3 meses', 'Marrom', 'Macho', 'Pequeno', 0),
('Cora', 'Cachorro', 'Vira-lata', 'De 6 até 15kg', '6 meses a 7 anos', 'Branco', 'Femea', 'Medio', 1),
('Oprah', 'Cachorro', 'Vira-lata', 'De 6 até 15kg', '6 meses a 7 anos', 'Preto', 'Femea', 'Pequeno', 0),
('Silva', 'Cachorro', 'Vira-lata', 'Ate 5kg', 'De 3 a 5 meses', 'Marrom', 'Macho', 'Pequeno', 0),
('Rex', 'Cachorro', 'Vira-lata', 'Acima de 15kg', 'Acima de 7 anos', 'Marrom', 'Macho', 'Grande', 1);

INSERT INTO Usuario (nome, cpf, telefone, email, endereco, dataNasc) VALUES
('João Silva', '11111111111', '11999990001', 'joao@email.com', 'Rua A', '1990-01-01'),
('Maria Souza', '22222222222', '11999990002', 'maria@email.com', 'Rua B', '1985-05-10'),
('Carlos Lima', '33333333333', '11999990003', 'carlos@email.com', 'Rua C', '1992-07-20'),
('Ana Paula', '44444444444', '11999990004', 'ana@email.com', 'Rua D', '1998-03-15'),
('Pedro Rocha', '55555555555', '11999990005', 'pedro@email.com', 'Rua E', '1980-11-30');

INSERT INTO Usuario_Animal VALUES
(1,1),(2,2),(3,3),(4,4),(5,5);

INSERT INTO userInterno (idUsuario, especialidade, setor, permissao, certificacao, experienciaAnos) VALUES
(1, 'Veterinário', 'Clínica', 'ADMIN', 'CRMV', 10),
(2, 'Treinador', 'Adestramento', 'PADRAO', 'Cert A', 5),
(3, 'Auxiliar', 'Clínica', 'PADRAO', 'Cert B', 2),
(4, 'Veterinário', 'Cirurgia', 'ADMIN', 'CRMV', 8),
(5, 'Recepção', 'Atendimento', 'PADRAO', 'Nenhuma', 1);

INSERT INTO userExterno (idUsuario, tipoResidencia, possuiOutrosAnimais, experienciaComAnimais, estadoCivil, renda) VALUES
(1, 'Casa', 1, 'EXPERIENTE', 'CASADO', 5000),
(2, 'Apartamento', 0, 'INICIANTE', 'SOLTEIRO', 3000),
(3, 'Casa', 1, 'INTERMEDIARIO', 'CASADO', 4000),
(4, 'Apartamento', 0, 'INICIANTE', 'SOLTEIRO', 3500),
(5, 'Chacara', 1, 'EXPERIENTE', 'DIVORCIADO', 6000);

INSERT INTO Adestrador (idUsuario, comportamentoAlvo, resultadoFinal, observacoes, status, dataInicio, dataFim, metodoUtilizado, nivelTreinamento) VALUES
(1, 'Sentar', 'Sucesso', 'Bom progresso', 'CONCLUIDO', '2024-01-01', '2024-01-10', 'Reforço Positivo', 'INICIANTE'),
(2, 'Ficar', 'Parcial', 'Em andamento', 'EM_ANDAMENTO', '2024-02-01', NULL, 'Clicker', 'INICIANTE'),
(3, 'Andar junto', 'Sucesso', 'Ótimo', 'CONCLUIDO', '2024-01-05', '2024-01-20', 'Reforço', 'AVANCADO'),
(4, 'Parar latido', 'Cancelado', 'Problemas', 'CANCELADO', '2024-03-01', '2024-03-05', 'Correção', 'INICIANTE'),
(5, 'Socializar', 'Sucesso', 'Excelente', 'CONCLUIDO', '2024-02-10', '2024-02-25', 'Reforço', 'AVANCADO');

INSERT INTO Adestrador_Animal VALUES
(1,1),(2,2),(3,3),(4,4),(5,5);

INSERT INTO Doenca (nomeDoenca, descricao, tratamentoPadrao, dataIdentificado) VALUES
('Gripe', 'Viral', 'Repouso', '2024-01-01'),
('Vermes', 'Parasita', 'Vermífugo', '2024-01-05'),
('Otite', 'Inflamação ouvido', 'Antibiótico', '2024-02-01'),
('Dermatite', 'Alergia', 'Pomada', '2024-02-10'),
('Febre', 'Sintoma', 'Antitérmico', '2024-03-01');

INSERT INTO Vacina (nomeVacina, descricao, fabricante, doseRecomendada, dataVacina) VALUES
('V10', 'Cães', 'Lab A', '1ml', '2024-01-01'),
('Antirrábica', 'Raiva', 'Lab B', '1ml', '2024-01-10'),
('Tríplice', 'Gatos', 'Lab C', '0.5ml', '2024-02-01'),
('Gripe Canina', 'Respiratória', 'Lab D', '1ml', '2024-02-15'),
('Leishmaniose', 'Parasita', 'Lab E', '1ml', '2024-03-01');

INSERT INTO Prontuario (idAnimal, dataDiagnostico, statusTratamento, observacoes, dataImplantacaoChip, dataAplicacao, profissionalResponsavel,
    lote, tratamentoAtual, profissionalAplicador, idDoenca) 
VALUES
(1, '2024-01-01', 'ATIVO', 'Observação 1', '2023-12-01', '2024-01-01', 'Dr João', 'L001', 'Tratamento A', 'Enf Maria', 1),
(2, '2024-01-05', 'FINALIZADO', 'Observação 2', '2023-12-05', '2024-01-05', 'Dr João', 'L002', 'Tratamento B', 'Enf Ana', 2),
(3, '2024-02-01', 'ATIVO', 'Observação 3', '2023-12-10', '2024-02-01', 'Dr João', 'L003', 'Tratamento C', 'Enf João', 3),
(4, '2024-02-10', 'SUSPENSO', 'Observação 4', '2023-12-15', '2024-02-10', 'Dr Ana', 'L004', 'Tratamento D', 'Enf Carlos', 4),
(5, '2024-03-01', 'ATIVO', 'Observação 5', '2023-12-20', '2024-03-01', 'Dr Ana', 'L005', 'Tratamento E', 'Enf Pedro', 5);

INSERT INTO Prontuario_Vacina VALUES
(1,1),(2,2),(3,3),(4,4),(5,5);

INSERT INTO Prontuario_Doenca VALUES
(1,1),(2,2),(3,3),(4,4),(5,5);

SELECT * FROM Animal;

-- CONSULTAS ( SELECT )

SELECT 
    nome,
    especie,
    raca,
    porte,
    peso,
CASE
    WHEN microchip = 'true' OR microchip = '1'
    THEN 'Sim' ELSE 'Não'
END AS microchip
FROM Animal;


SELECT 
    a.nome AS animal,
    u.nome AS dono
FROM Animal a
JOIN Usuario_Animal ua ON a.idAnimal = ua.idAnimal
JOIN Usuario u ON ua.idUsuario = u.idHumano;


SELECT 
    a.nome,
    p.dataDiagnostico,
    p.statusTratamento
FROM Animal a
JOIN Prontuario p ON a.idAnimal = p.idAnimal;


SELECT nome
FROM Animal
WHERE idAnimal IN (
    SELECT idAnimal FROM Prontuario
);


SELECT nome, peso
FROM Animal
WHERE peso IN (
    SELECT peso = 'Ate 5kg'
);


SELECT nome
FROM Usuario u
WHERE EXISTS (
    SELECT 1
    FROM Usuario_Animal ua
    WHERE ua.idUsuario = u.idHumano
);


SELECT 
    u.nome,
    (
        SELECT COUNT(*)
        FROM Usuario_Animal ua
        WHERE ua.idUsuario = u.idHumano
    ) AS qtd_animais
FROM Usuario u;


SELECT 
    a.nome AS animal,
    d.nomeDoenca
FROM Animal a
JOIN Prontuario p ON a.idAnimal = p.idAnimal
JOIN Prontuario_Doenca pd ON p.idProntuario = pd.idProntuario
JOIN Doenca d ON pd.idDoenca = d.idDoenca;


SELECT 
    a.nome,
    v.nomeVacina
FROM Animal a
JOIN Prontuario p ON a.idAnimal = p.idAnimal
JOIN Prontuario_Vacina pv ON p.idProntuario = pv.idProntuario
JOIN Vacina v ON pv.idVacina = v.idVacina;


SELECT 
    An.nome,
    a.status,
    a.nivelTreinamento
FROM Adestrador a
JOIN Animal An ON a.idUsuario = An.idAnimal
WHERE a.status = 'EM_ANDAMENTO';


SELECT nome, especie
FROM Animal a
WHERE EXISTS (
    SELECT 1
    FROM Prontuario p
    JOIN Prontuario_Doenca pd ON p.idProntuario = pd.idProntuario
    WHERE p.idAnimal = a.idAnimal
);

SELECT 
    nome,
    especie,
    raca,
    peso,
    idade,
    cor,
    sexo,
    porte,
    CASE
        WHEN microchip = 'true' OR microchip = '1' THEN 'Sim' 
        ELSE 'Não'
    END AS microchip
FROM Animal
WHERE sexo IN ('Macho')
ORDER BY nome ASC;
